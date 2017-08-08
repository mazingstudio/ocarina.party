CONTAINER_NAME      ?= aniraco
CONTAINER_IMAGE     ?= mazingstudio/aniraco

DEPLOY_TARGET       ?= dev

CLOUDFLARE_EMAIL    ?= jose@mazing.studio

CONTAINER_PORT      ?= 80
EXTERNAL_PORT       ?= 5000

.PHONY: node_modules css

build: clean
	npm run build

clean:
	rm -rf build

setup: node_modules

start:
	npm start

node_modules:
	rm -rf ./node_modules && \
	npm install

run:
	npm install -g serve
	serve -s build

standard:
	standard --fix

docker-build:
	sudo docker build -t $(CONTAINER_IMAGE) .

docker-run: docker-build
	(docker stop $(CONTAINER_NAME) | exit 0) && \
	(docker rm $(CONTAINER_NAME) | exit 0) && \
	docker run -d \
		--name $(CONTAINER_NAME) \
		-p 127.0.0.1:$(EXTERNAL_PORT):$(CONTAINER_PORT) \
		$(CONTAINER_IMAGE)

docker-stage: build docker-run

deploy: build
	ansible-playbook playbook.yml -e "host=$(DEPLOY_TARGET)" && \
	$(MAKE) purge-cache

deploy-prod:
	DEPLOY_TARGET=prod $(MAKE) deploy

deploy-all:
	DEPLOY_TARGET=all $(MAKE) deploy

purge-cache:
	curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$(CLOUDFLARE_ZONE)/purge_cache" \
	-H "X-Auth-Email: $(CLOUDFLARE_EMAIL)" \
	-H "X-Auth-Key: $(CLOUDFLARE_API_KEY)" \
	-H "Content-Type: application/json" \
	--data '{"purge_everything":true}'

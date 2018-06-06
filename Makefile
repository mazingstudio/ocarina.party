.PHONY: all build

all:
	npm install && \
	npm start

build:
	npm run build && \
	rm -rf docs && \
	mv build docs && \
	cp CNAME docs

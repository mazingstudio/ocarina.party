.PHONY: all

all:
	npm install && \
	npm start

build:
	npm run build && \
	mv build docs && \
	cp CNAME docs

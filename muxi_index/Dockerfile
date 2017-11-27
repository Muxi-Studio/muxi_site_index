FROM python:2.7
MAINTAINER kasheemlew <klew1879@gmail.com>

ENV DEPLOY_PATH /app

RUN mkdir -p $DEPLOY_PATH
WORKDIR $DEPLOY_PATH

Add requirements.txt requirements.txt
RUN pip install -r requirements.txt

Add . .

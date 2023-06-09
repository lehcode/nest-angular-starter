﻿ARG mongo_version
FROM mongo:${mongo_version}

LABEL maintainer="lehcode <3556648+lehcode@users.noreply.github.com>"
LABEL description="MongoDB server"

ARG debug

RUN if [ "${debug}" != "yes" ]; then set -e; else set -ex; fi \
    && apt-get update \
    && apt-get install -y tzdata locales ca-certificates psmisc \
    && apt-get -y upgrade \
    && apt-get clean \
    && ln -fs /usr/share/zoneinfo/${tz} /etc/localtime \
    && echo ${tz} > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && echo "vm.max_map_count=102400" | tee -a /etc/sysctl.conf \
    && mkdir /data/ssl

ARG tz
ARG port
ARG user
ARG pass
ARG telemetry
ARG data_db
ARG admin_db
ARG collections
ARG root_user
ARG root_pass

COPY initdb.js /tmp/
WORKDIR /data/db

RUN mongod --fork --syslog --port ${port} \
    && mongosh --verbose /tmp/initdb.js \
    && if [ "${telemetry}" = "no" ]; then mongosh --nodb --eval "disableTelemetry()"; fi \
    && chown -R mongodb:mongodb /data/db /data/ssl

USER mongodb:mongodb

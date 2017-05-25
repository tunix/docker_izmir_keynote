FROM mysql
MAINTAINER Alper Kanat <me@alperkan.at>
COPY api.sql /docker-entrypoint-initdb.d/api.sql
ENV MYSQL_RANDOM_ROOT_PASSWORD yes
ENV MYSQL_DATABASE demo
ENV MYSQL_USER demo
ENV MYSQL_PASSWORD demo

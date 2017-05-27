FROM mysql/mysql-server
MAINTAINER Alper Kanat <me@alperkan.at>
COPY api.sql /docker-entrypoint-initdb.d/api.sql
ENV MYSQL_RANDOM_ROOT_PASSWORD yes
ENV MYSQL_DATABASE demo
ENV MYSQL_USER demo
ENV MYSQL_PASSWORD demo
CMD ["mysqld", "--character-set-server=utf8", "--collation-server=utf8_general_ci"]

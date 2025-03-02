## docker

https://www.docker.com

### 启动MySQL实例

```shell
# https://hub.docker.com/_/mysql
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```

### 使用docker-compose

```shell
# 创建服务
docker-compose up -d
# 查看正在运行的容器
docker ps
# 查看网络
docker network ls
# 查看容器信息
docker inspect 容器名称
```

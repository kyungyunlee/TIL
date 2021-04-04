**2021.04.04**

![0_TZfTsYARaJupeCTP](https://tva1.sinaimg.cn/large/008eGmZEgy1gp7rj1mt9sj309c07zweh.jpg)

#### What is a docker? 

Docker is a platform that makes it easy to develop, ship and run applications on different machines. We have all gone through missing library errors and version incompatibility issues when trying to run some program. Docker alleviates these problems by building "containers" that can contain all the necessary resources to support the application's runtime environment. 



#### Main idea of docker : containers

Docker provides OS-level virtualization through containers. 

It is always compared to virtual machines (VMs), since they both allow multiple applications to be run on the same machine. 

However, the main difference between containers and VMs is the presence of OS. 

Each VM has its own OS. This is what makes it possible to install windows and ubuntu on your macbook. 

On the other hand, containers on the same machine share the same host OS and each of them only contains its application's necessary binaries and libraries. 

This is why containers are called "os-level" virtualization. Each container is tricked to thinking that it is using the host machine's OS all on its own, when in fact, there are other containers who are sharing it. 

A container is an isolated environment and therefore, does have its own namespace (ex. mount points, PIDs, etc). 



![pasted image 0](https://tva1.sinaimg.cn/large/008eGmZEgy1gp7pz2aed4j30fn088t8q.jpg)

img src: https://www.aquasec.com/cloud-native-academy/docker-container/



#### Pros and cons of containers and VMs

Containers are

* lighter and more portable
  * Many resources are shared among containers (like OS), so it takes up less space
* Highly scalable through container orchestration
  * Can use multiple containers at the same time
  * Docker compose, Docker swarm, Kubernetes

Meanwhile, VMs are 

* more secure since it has its own OS and shares less resources with another VM. 

* able to run any type of OS 



#### How does docker work?

If you want to use docker, you need to first install the docker engine on a machine.

This docker engine will act like a manager for all of your containers, managing system resources by communicating with the host kernel. I guess you can think of docker engine similar to the  type-2 hypervisors in VMs.

Docker uses client-server architecture, in which the docker client (you) communicates with the docker daemon through docker API. 

Docker is composed of the following components

* docker client 
* docker daemon : manages images and containers
* docker images : instruction for how to create the container. It is built using Dockerfile. 
* docker containers : the runnable instance of the docker image. 
* docker registry : storage for container images. There is a public one and also you can have a private one. 

<img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gp7r70uvk4j30l10b00tj.jpg" alt="architecture-01" style="zoom:67%;" />

img src: https://docs.docker.com/get-started/overview/



#### Docker isolation

A container is an isolated environment, so it does not aware of other containers and the host OS. 

Docker achieves this isolation by giving each docker its own namespace and limiting system resources through cgroups. 

Each container has its own namespace and it has access to its namespace only. Cgroups will limit each container to certain amount of resources like CPU and memory. 

Namespaces include 

* PID
* Mount 
* IPC
* User
* Network

Cgroups 

* CPU
* memory
* network bandwidth
* disk
* priority 

```
docker run -d --cpus=1 --m=10G
```



#### Managing multiple containers 

* Docker compose (single machine)

When your service consists of multiple containers (like in microservices), you can organize and run multiple containers together. 

* Docker swarm (multiple machines)

When your service uses multiple clusters, containers on those clusters must work together. 

* Kubernetes (multiple machines)

Google's container orchestration system.



Docker is written in go! 
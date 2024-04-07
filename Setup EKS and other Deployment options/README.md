## EKS Configuration

We will be setting up kubernetes cluster on AWS

![1](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/51a5ed16-f87e-4c7c-b780-f8abb8cbb2f8)

Creating a Service role for cluster
![2](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/d02a89d8-5391-4007-8b7f-04da512d84fe)
![3](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/95269021-8ddd-4b15-96c2-0d51865b6b5e)
![4](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/7075c032-324a-4356-a74c-6339cd5deaf7)


![6](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/71cd54fc-468f-4421-a9b9-aeddc47b78d8)
![7](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/5b7653e1-2657-46d5-959b-9832e3693f00)

Setting up the Network

![8](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/593365f4-32f9-4385-a009-733ed6344d33)

Installing conponents on Master Node
![9](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/d0bbba5d-e300-44c5-a715-58b3a0a225da)
![10](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/526137ab-f42e-4be1-a8f2-6f8e7e53fce8)
![11](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/5f88c05a-bea9-4b26-80af-343f9cdccf29)
![12](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/a2f2aace-dbb8-4a5c-b523-b7c47410ff5e)
![13](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/df574ef0-54a7-4fc6-af2b-255a52c75f35)
![14](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/645895a4-7c7d-4418-b4dd-faa3998aea26)

EKS CLuster is ready
![15](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/da468fbc-8103-41f2-bd87-31434932af69)


### Setting up the Worker Node

![16](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/5eb50461-f9c6-4aae-9c3f-251eb89c1067)

Creating the nodegroup roles
![17](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/5589f768-bb3b-4a97-ab0f-2a652ed44c85)
![18](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/005e2c3e-6356-4f8b-8615-45e317219695)
![19](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/f8726612-f721-4632-b22c-33e30fdcce50)
![20](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/03fe2ff0-39e5-460a-b7d2-27f238327d5f)
![21](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/fdc7fa88-4d10-4b77-8146-4366dd9fa4e8)
![22](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/a8221dbd-6e96-49b4-ba0c-b5124b8f4acc)


Make sure the Worker noder are in the same Network
![23](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/910d1dbc-8373-4e17-b442-f8124f1c8fe4)

Worker Node are ready
![24](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/4a4df193-c926-4209-99da-262b280bb62b)

### Setting up the Control Plane

Control plane will be a EC2 having following packages installed 
 - AWSCLI
 - EKSCTL
 - Kubectl


```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```
![25](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/83944d08-2083-4b20-8a87-31a67b20d51f)
![26](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/98564f09-3798-4961-9596-077c526440cc)


```
curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.26.4/2023-05-11/bin/linux/amd64/kubectl
chmod +x kubectl
mv kubectl /usr/local/bin/
kubectl version
```
![27](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/efdb9b65-ad03-47d5-8709-0aeeb0d0f2a3)


```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version
```
![28](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/1e0f2635-4184-491a-a2b8-e48945c50ee0)


![29](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/5771626c-8845-46aa-bb9b-829f7b3db351)


Update the config 

```
aws eks update-kubeconfig --region < region name> --name <name of cluster>
```
![30](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/172fd079-7753-449e-92bc-ac5ad05bc1eb)






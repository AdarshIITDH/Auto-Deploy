## Sonarqube Installation and Configuration


```
docker run -d --name sonar -p 9000:9000 sonarqube:lts-community
```
![18](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/b94b39b5-660e-4243-b135-9b976a0ad3ed)
![19](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/0113536a-5966-4bcd-bf60-0d1204c0d9ea)

Open the port - 9000 on the ec2 

![20](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/cfba6616-5cf4-441b-93f7-bf5273a84fee)

![21](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/f7336f56-b8db-4b76-bdaa-37b1ae7f7cd7)

![22](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/ad912245-7250-4e2f-be05-2fe57abd4067)

Default Username and Password is admin

![23](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/9ba7ef1d-c40c-437e-bde5-05f9d2c1b8d6)


## Configure Sonarqube with Jenkins

![26](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/9b319e79-b315-4449-b73b-c37bbf298bb3)

Goto Manage Jenkins →Plugins → Available Plugins Install below plugins

1 → Eclipse Temurin Installer (Install without restart)

2 → SonarQube Scanner (Install without restart)

3 → NodeJs Plugin (Install Without restart)

### Configure Java and Nodejs in Global Tool Configuration

Go to Manage Jenkins → Tools → Install JDK(17) and NodeJs(16)→ Click on Apply and Save
![29](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/14079f44-95d1-4668-a7af-6b953ed83ac4)
![30](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/b922e431-7484-4a1a-a81c-de7d27129f38)

### Configure Sonar Server in Manage Jenkins

Click on Administration → Security → Users → Click on Tokens and Update Token → Give it a name → and click on Generate Token

![31](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/c8c8919a-bd0c-41a8-8807-c2ea1a3dfd6f)
![32](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/55441e23-21de-4dc5-babf-5b1c319a61bc)
![33](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/d361b036-0b09-4f19-acdb-b783ab45191d)
![34](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/28e84d67-6334-4346-8643-86ae690f9ab5)
![36](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/d306cfca-8c67-4937-aaf0-51ba74312b5e)
![37](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/73dfb370-2011-4b6d-9a04-c7fd30745818)
![38](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/3121fbb6-e8f6-46b1-ab6f-8afcecf28b2f)

### Integrate Sonar server with Jenkins

![40](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/7a7826a3-7aaa-4bd5-81ee-176b50bd0a6c)
![42](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/12b9c47e-3211-4fc2-aeff-ee7e665f2b3f)

In the Sonarqube Dashboard add a quality gate also
Administration--> Configuration-->Webhooks
![45](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/bbae09bb-0235-408f-a593-8387bd6cff73)

To build docker inside the jenkins it will ask for root previdledges
```
sudo visudo
jenkins ALL=(ALL) NOPASSWD: ALL
service jenkins start
```













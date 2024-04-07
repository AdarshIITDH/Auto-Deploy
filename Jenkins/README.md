# Jenkins Setup

### Installation

```
sudo apt update -y
#sudo apt upgrade -y
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | tee /etc/apt/keyrings/adoptium.asc
echo "deb [signed-by=/etc/apt/keyrings/adoptium.asc] https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list
sudo apt update -y
sudo apt install temurin-17-jdk -y
/usr/bin/java --version
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
                  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
                  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
                              /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update -y
sudo apt-get install jenkins -y
sudo systemctl start jenkins
sudo systemctl status jenkins
```
![1](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/17c0c3b0-511a-4970-bff4-f6588061532d)
![2](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/29393e5a-7466-40c5-b4f8-66b0149901ab)
![3](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/465214a9-8f38-4755-bcef-1ae5729a8a67)
![4](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/90821c49-64b9-4f72-b694-7497dcb55264)
![5](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/1c64a832-c5b7-4591-ad4b-a1857dc31c22)


Open the port 8080 on the ec2 so that you can access the Jenkins UI.
![6](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/3948f68c-97c7-495c-b032-9f9ce0e201b4)


![7](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/270d843c-d9f8-4784-aea8-95aa5af8cfea)

for the password
```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
![8](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/8091c759-06b8-478d-a277-3267c6b22374)
![9](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/b2121324-44f9-4441-9f84-46e416c9bba1)
![10](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/9ae9c0d9-1223-4f0d-919c-c75d98d6fcec)
![11](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/736dbb63-85b1-4ca0-99be-e5c5db25a61b)
![12](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/0cb64740-732f-4fcb-a3e5-35b9323fbd8a)
![13](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/9e5f491f-1677-4ff9-b942-14fd98a89c08)
![14](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/4c1c0121-615f-4171-b73b-d7babfd9214e)
![16](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/e9c33840-2505-4276-9ac9-42156d77d0be)


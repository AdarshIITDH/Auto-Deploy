# Auto Deploy

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project aims to provide users with an automated deployment process on the AWS platform, allowing them to choose deployment options based on cost considerations. Users are required to log in with their GitHub credentials and select the repository and branch containing their code. The application then scans the code for vulnerabilities and provides a report to the user. If the code passes the security checks, users can proceed with deployment.

## Architecture

![capstron draf-1 drawio](https://github.com/AdarshIITDH/Auto-Deploy/assets/60352729/c05efa77-178f-48e3-9bf0-418412536e6a)


## Features

 - **GitHub Integration:** Authenticate with GitHub to access repositories and branches.
 - **Code Scanning:** Perform automated code scans to identify vulnerabilities.
 - **Deployment Options:** Choose from multiple deployment options on AWS, including EC2, Fargate, Beanstalk, and EKS.
 - **Cost Estimation:** Receive estimated deployment costs for each option before making a selection.
 - **Automated Deployment:** Deploy the application to the selected AWS environment with ease.

## Deployment Options

 - **EC2 Deployment:** Traditional virtual server deployment offering flexibility and control.
 - **Fargate Deployment:** Serverless container deployment for simplified management and scalability.
 - **Beanstalk Deployment:** Platform-as-a-Service (PaaS) deployment with automatic scaling and management.
 - **EKS Deployment:** Kubernetes-based deployment for containerized applications with advanced orchestration capabilities.

## Usage

 - Log in with GitHub credentials.
 - Select the repository and branch containing your code.
 - Review the code scan report for vulnerabilities.
 - Choose a deployment option based on cost estimation.
 - Deploy the application to the selected AWS environment.


## Implementation




## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these guidelines:


- Fork the repository
- Create a new branch (`git checkout -b feature/your-feature`)
- Make your changes
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Create a new Pull Request

Please make sure to update tests as appropriate and follow the code of conduct.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


# Collaborators

We would like to acknowledge the following individuals for their contributions to this project:

- **[@Adarsh Kumar](https://github.com/AdarshIITDH)** - Developed the core functionality of the project
- **[@Abhijit Shinde](https://github.com/abhijitganeshshinde)** - Designed the user interface and provided valuable feedback

We appreciate the efforts of all contributors who have helped make this project possible!


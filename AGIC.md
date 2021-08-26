AGIC는 AKS 내의 Pod임
AGIC와 ARM의 연결로 인해 KUBECTL 명령이 Azure 자원을 컨트롤함 (예) Path Based Routing)
 - AGW 구성을 만들고 적용함
     - 그린 필드, AKS 생성시 AGIC 적용 
        - https://docs.microsoft.com/ko-kr/azure/application-gateway/ingress-controller-install-new 
     - 브라운 필드, 기존 구성에 AGIC 붙이기
        - https://docs.microsoft.com/ko-kr/azure/application-gateway/ingress-controller-install-existing 
 - What is service principal
     -   https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?toc=%2Fazure%2Fazure-resource-manager%2Ftoc.json&view=azure-cli-latest   
 - AGIC Public GitHub Example Link
     - https://github.com/Azure/application-gateway-kubernetes-ingress  
 - AAD Pod Identity Public GitHub Example Link
     - https://github.com/Azure/aad-pod-identity 

<img src="/images/AGIC Install How2.png">        

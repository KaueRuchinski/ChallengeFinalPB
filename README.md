# Challenge Final do PB Compass

# Bem vindo, esse é o readme do Challenge Final(Sprint 8)

## Conteúdos abordados:

- Docker
- CI/CD com Gitlab
- Execução de testes no EC2
- Implementação do Challenge final

Olá me chamo Kauê Humenhuk Ruchinski, sou de Mafra , tenho 19 anos, olhos castanhos, cabelos loiros, pele branca,  tipo roupa que está utilizando e sua cor), faço Eng. de Software na UNC de Mafra, atualmente(21/08/2024) estou na 4º fase ou 8º semestre.

# Abaixo segue o passo de instalação sobre o que será necessário para realizar o projeto.

## Instalação(K6 e Chocolatey)

Entre no site do **[K6](https://k6.io/docs/)**,e vá para o guia de **[Instalação](https://k6.io/docs/get-started/installation/).**

Em seguida de acordo com seus SO, siga os comando que são instruidos a cada sistema.

No caso do Windows você ira, e optar pelo Chocolatey, como será feito nessa sprint, siga as instruções abaixo.

1- Entre no site da **[Chocolatey](https://chocolatey.org/install#individual)**

2- Clique na aba **INDIVIDUAL**

    ![image](https://github.com/user-attachments/assets/b2813d2b-8276-4ed0-83f6-47a8bc63f0da)


3- Copie o seguinte comando:
    ```
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

4- Execute o Windows PowerShell como administrador

5- Cole o comando 

No mesmo prompt, vá para o site do **[K6](https://k6.io/docs/get-started/installation/)**.

E rode o seguinte comando: 
```
choco install k6
```
6- Para importar o meus códigos e usa-los no seu computador
 - Você pode tanto clonar:
```
	git clone https://github.com/KaueRuchinski/EstagioUOL.git
```
- Ou apenas baixar o arquivo em ZIP e extrai-lo

  No intervalo disso tudo, abra o prompt de comando(como Adm de preferencia)
  e rode o seguinte codigo
  ```
  	npx serverest@latest
    ```
  Dessa forma, voce irá rodar a API que iremos usar, localmente na sua máquina
  
  1- Vá até a pasta onde está o arquivo

  2- Clique com o botão direito

  3- Selecione a opção abri com VScode ou a IDE de sua preferencia
  
  ![image](https://github.com/user-attachments/assets/17e93578-bfa7-4584-8ead-850f6676ac81)

  ##  Ao entrar na IDE e desejar rodar algum teste siga esses passos:
 
  1- Clique com botao direito no arquivo.
  
  2- Vá em Open Terminal.

  3- Clique na opção "Open in Integrated Terminal"
  
  ![image](https://github.com/user-attachments/assets/f4695450-b614-4162-af61-46922f01302a)


  11. Escreva no terminal.
   ```   	
     k6 run
    ```
  12.Em seguida você digitará o nome do arquivo que deseja testar, ou pode apertar a tecla TAB até o arquivo desejado apareça

  13. Agora só apertar ENTER e rodar o teste
      
## Objetivos dos Testes:

Avaliar o nivel de performance da API

### Segue os links para os dias,Planejamento e para Baixar o JMeter:

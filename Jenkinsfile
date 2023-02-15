def imagename = "mujeeb98/home-hub"
def dockerImage = ''

node {
    stage('Cloning Git') {
        git(url: 'https://github.com/Mujeeb78/home-hub.git', branch: 'main')
    }
  
    stage('Building image') {
        script {
          dockerImage = docker.build imagename
      }
    }
    stage('Deploy Image') {
          withCredentials([usernamePassword(credentialsId: 'DocCred', passwordVariable: 'DocCredPassword', usernameVariable: 'DocCredUser')]) {
            sh "docker login -u ${env.DocCredUser} -p ${env.DocCredPassword}"
            sh 'docker push mujeeb98/home-hub:latest'
            sh "docker pull mujeeb98/home-hub:latest"
            sh "docker run -d -t -p 3000:3000 --name homehub. mujeeb98/homehub:latest"
      }
    }  
}

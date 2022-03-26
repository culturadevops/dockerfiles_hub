from ubuntu
RUN apt-get update && \
    apt-get install -y software-properties-common 
    #&& \
    #rm -rf /var/lib/apt/lists/*
run  apt install  curl -y

RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -

RUN apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
RUN apt install terraform -y
workdir /tmp


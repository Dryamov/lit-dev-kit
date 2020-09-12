FROM debian:10

ARG DEBIAN_FRONTEND=noninteractive
ARG INSTALL_ZSH=true
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ARG UPGRADE_PACKAGES=true

ARG ENABLE_NONROOT_DOCKER=true
ARG SOURCE_SOCKET=/var/run/docker-host.sock
ARG TARGET_SOCKET=/var/run/docker.sock

ARG NVM_DIR=/usr/local/share/nvm
ARG NODE_VERSION=lts/*
ARG UPDATE_RC=true

COPY library-scripts/*.sh /tmp/library-scripts/

RUN /tmp/library-scripts/common-debian.sh \
    && /tmp/library-scripts/docker-debian.sh \
    && /tmp/library-scripts/node-debian.sh \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts/

RUN mkdir -p /home/$USERNAME/.vscode-server/extensions \
    /home/$USERNAME/.vscode-server-insiders/extensions \
    && chown -R $USERNAME \
    /home/$USERNAME/.vscode-server \
    /home/$USERNAME/.vscode-server-insiders

USER $USERNAME
RUN git clone --quiet https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions \
    && git clone --quiet https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting \
    && git clone --quiet https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions \
    && git clone --quiet https://github.com/zsh-users/zsh-history-substring-search ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-history-substring-search \
    && git clone --quiet https://github.com/lukechilds/zsh-better-npm-completion ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-better-npm-completion \
    && sed -i 's/plugins=(git)/plugins=(git zsh-completions zsh-syntax-highlighting zsh-autosuggestions history-substring-search zsh-better-npm-completion docker docker-compose)/g' ~/.zshrc \
    && echo 'autoload -U compinit && compinit' >> ~/.zshrc
SHELL ["zsh", "-c"]
ENV DEBIAN_FRONTEND=dialog
ENTRYPOINT [ "/usr/local/share/docker-init.sh" ]
CMD [ "sleep", "infinity" ]

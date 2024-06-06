<Bilibili vid="BV1Mr421c7S3" />

1. 如果同一台电脑同时使用多个代码托管平台，应进行多 SSH 密钥的配置。
2. 不同托管平台处于安全性考虑不宜使用同一密钥，应当分别配置。
3. 需要通过配置文件制定在什么域名下使用什么密钥。

## 生成密钥命令

仍然是使用`ssh-keygen`命令生成密钥。
执行后会提示默认路径，
要在此输入指定的不同于默认的路径，
否则将覆盖之前在默认路径上配置的密钥。
如下示例中`yourname`为你当前设备上的用户名，
`filename`为所设置的密钥文件名，
不要没看懂就直接复制。

```sh
>>> ssh-keygen
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/yourname/.ssh/id_ed25519): /User/yourname/.ssh/filename
```

## 配置文件位置

1. 配置文件位于当前用户文件夹(`~`)下的`.ssh`文件夹内。
2. 配置文件名称为`config`，没有后缀。即完整路径为`~/.ssh/config`。
3. 配置文件语法非`ini`亦非`properties`，是此处特有的语法。

## 配置文件语法

1. `Host`: 配置的代码托管平台名称。
2. `HostName`: 配置的代码托管平台域名。
3. `IdentityFile`: 配置的密钥文件路径。
4. 缩进要对齐，虽然不论2个空格或4个空格都支持，但前后需保持一致。
5. 配置文件的路径必须写绝对路径，`~/.ssh/xxx`的写法可能会不兼容。
6. 这些属性的含义通过`man ssh_config`命令都可查看。

## 配置文件示例

1. 这里写了多个平台的例子，情根据实际需求配置。
2. 示例中的`yourname`即用户文件夹的名称，请替换为自己的用户名。
3. 具体路径根据自己生成时所制定的路径来写，不要没看懂就直接复制。

```ini
# GitHub
Host github.com
  HostName github.com
  IdentityFile /Users/yourname/.ssh/github

# 以GitLab国际版为例
Host gitlab.com
  HostName gitlab.com
  IdentityFile /Users/yourname/.ssh/gitlab

# 以GitLab中国版(极狐)为例
Host jihulab.cn
  HostName jihulab.cn
  IdentityFile /Users/yourname/.ssh/jihulab

# 以码云(Gitee)为例
Host gitee.com
  HostName gitee.com
  IdentityFile /Users/yourname/.ssh/gitee

# 以华为云西南片区贵州二服务器为例
Host codehub.devcloud.cn-southwest-2.huaweicloud.com
  HostName codehub.devcloud.cn-southwest-2.huaweicloud.com
  IdentityFile /Users/yourname/.ssh/huawei
```

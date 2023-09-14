# Setup notes
 1. Run the playbook "generate_ssh_key.yaml" to generate SSH keypair (on local system) used in TF templates and Ansible for connecting to 
   remote EC2 instances.

```sh
ansible-playbook ansible/generate_ssh_key.yaml 
```
  

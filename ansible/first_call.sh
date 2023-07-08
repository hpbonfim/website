#!/bin/bash

# Get the directory of the script
SCRIPT_DIR=$(dirname "$0")

# Path to the hosts file
HOSTS_FILE="$SCRIPT_DIR/hosts"

# Extract IP addresses from hosts.ini
IP_ADDRESSES=($(grep -Po '(?<=ansible_host=)[0-9.]+(?=\s*$)' "$HOSTS_FILE"))

# Specify your server username here
SERVER_USER="cloud_user"

# Path to your public key
PUB_KEY_PATH="$HOME/.ssh/ansible.pub"

# Path to your private key
PRIV_KEY_PATH="$HOME/.ssh/ansible"

# Read the contents of the public key file
PUBLIC_KEY_VALUE=$(cat "$PUB_KEY_PATH")

# Function to validate an IP address
function valid_ip() {
    local ip=$1

    # Use regex pattern for IP address validation
    [[ $ip =~ ^([0-9]{1,3}\.){3}[0-9]{1,3}$ ]]
}

# Function to copy the SSH public key
function copy_public_key() {
    local ip=$1
    # SSH to the server and copy the public key
    ssh -i "$PRIV_KEY_PATH" -t "$SERVER_USER@$ip" "echo \"$PUBLIC_KEY_VALUE\" >> ~/.ssh/authorized_keys"
}

# Function to certify that the SSH public key is authorized
function is_ssh_authorized(){
    local ip=$1
    # SSH to the server and check if public key exists in authorized_keys
    ssh -i "$PRIV_KEY_PATH" -o ConnectTimeout=5 -t "$SERVER_USER@$ip" "grep -q \"$PUBLIC_KEY_VALUE\" ~/.ssh/authorized_keys"
}

# Connect into servers host list
for IP in "${IP_ADDRESSES[@]}"; do
    echo "Connecting to server: $IP"
    if valid_ip "$IP"; then
        if ! is_ssh_authorized "$IP"; then
            while ! is_ssh_authorized "$IP"; do
                echo "Trying to copy public key to server: $IP"
                copy_public_key "$IP"
            done
            echo "Public key copied successfully to server: $IP"
        else
            echo "SSH key already exists on the server: $IP"
        fi
    else
        echo "$IP is not a valid IP address. Skipping..."
    fi
done

#!/usr/bin/env sh
ruby api/server.rb &
server_pid=$!
killserver() {
    kill -9 $server_pid
}
trap killserver EXIT

jest

#!/usr/bin/env node

import {program} from 'commander';
import ip from '.';

program
  .name('ipcli')
  .description('Obtém o endereço IP local')
  .action(() => {
    console.log('Your local IP address is:', ip());
  });

program.parse(process.argv);

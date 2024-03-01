#!/usr/bin/env node

import {program} from 'commander';
import chalk from 'chalk';
import {ip} from '.';

program
  .name('ipcli')
  .description('Obtém o endereço IP local')
  .action(() => {
      console.log(chalk.green('Your local IP address is: ',) + chalk.blue(ip()));
  });

program.parse(process.argv);

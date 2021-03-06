import { app, shell } from 'electron';
import { showAboutDialog } from '.';

export default (win, iconPath) =>
  [{
    label: 'React Native Debugger',
    submenu: [{
      label: 'About',
      click() {
        showAboutDialog(iconPath);
      },
    }, {
      label: 'Check for Updates...',
      click() {
        win.checkUpdate(win, iconPath, true);
      },
    }, {
      type: 'separator',
    }, {
      label: 'Hide',
      accelerator: 'Command+H',
      selector: 'hide:',
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Shift+H',
      selector: 'hideOtherApplications:',
    }, {
      label: 'Show All',
      selector: 'unhideAllApplications:',
    }, {
      type: 'separator',
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click() {
        app.quit();
      },
    }],
  }, {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:',
      }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:',
      }, {
        type: 'separator',
      }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:',
      },
      {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:',
      },
      {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:',
      },
      {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:',
      },
    ],
  }, {
    label: 'View',
    submenu: [{
      label: 'Reload',
      accelerator: 'Command+R',
      click() {
        win.webContents.reload();
      },
    }, {
      label: 'Toggle Full Screen',
      accelerator: 'Ctrl+Command+F',
      click() {
        win.setFullScreen(!win.isFullScreen());
      },
    }, {
      label: 'Toggle Developer Tools',
      accelerator: 'Alt+Command+I',
      click() {
        win.toggleDevTools();
      },
    }, {
      label: 'Toggle React DevTools',
      accelerator: 'Alt+Command+J',
      click() {
        win.webContents.send('toggle-devtools', 'react');
      },
    }, {
      label: 'Toggle Redux DevTools',
      accelerator: 'Alt+Command+K',
      click() {
        win.webContents.send('toggle-devtools', 'redux');
      },
    }],
  }, {
    label: 'Window',
    submenu: [{
      label: 'Minimize',
      accelerator: 'Command+M',
      selector: 'performMiniaturize:',
    }, {
      label: 'Close',
      accelerator: 'Command+W',
      selector: 'performClose:',
    }, {
      type: 'separator',
    }, {
      label: 'Bring All to Front',
      selector: 'arrangeInFront:',
    }],
  }, {
    label: 'Help',
    submenu: [{
      label: 'Documentation',
      click() {
        shell.openExternal('https://github.com/jhen0409/react-native-debugger#usage');
      },
    }, {
      label: 'Issues',
      click() {
        shell.openExternal('https://github.com/jhen0409/react-native-debugger/issues');
      },
    }],
  }];

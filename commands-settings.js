const { setCommandsSettings } = require('./system/main');

const 

setCommandsSettings({
  owner_id: ['61558748810480', '100076390522989','100093063909805'],
  menu_command: ['menu', 'help','about','how'],
  menu_header: 'Chat with the ginimous bot\nCommand List:',
  item_format: '\n🗨 (name)',
  show_typing: true,
  command_not_found: 'Command (name) not found',
  group_only_commands: [], 
  group_only_message: 'This command is for groups only',
  admin_only_commands: [],
  admin_only_message: 'This command is for admin/owner only',
  owner_only_commands: ["shell","restart","octo"],
  owner_only_message: "That command is for owner only",
});

const context = require.context('./tests/.', true, /-spec\.js$/);
context.keys().forEach(context);

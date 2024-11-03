require('dotenv').config();
const sdk = require('api')('@iugu-dev/v1.0#cprxbcclkiqeh5n');

sdk.auth(process.env.IUGU_API_KEY);

sdk.criarFatura({ ensure_workday_due_date: false })
  .then(({ data }) => console.log('Fatura criada com sucesso:', data))
  .catch(err => console.error('Erro ao criar fatura:', err));

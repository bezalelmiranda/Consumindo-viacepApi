export class ViaCepModel {
  // selecionar um item + Ctrl + f2 = seleciona todos os items iguais ao selecionado;
  cep?:         string;
  logradouro?:  string;
  complemento?: string;
  bairro?:      string;
  localidade?:  string;
  uf?:          string;
  ibge?:        string;
  gia?:         string;
  ddd?:         string;
  siafi?:       string;
  numero?:      number;

// Cria um construtor que trás um objeto parcial, com os campos que forem descritos no código;
  constructor(object: Partial<ViaCepModel>) {
    // const obj = {
    //   cep: '89-0000',
    //   localidade: 'BNU'
    // };
    Object.assign(this, object);
  }

}

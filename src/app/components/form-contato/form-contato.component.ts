import { ViaCepModel } from './../../models/via-cep-model';
import { Component, OnInit } from '@angular/core';
import { ViaCepApiService } from 'src/app/services/via-cep-api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {
  // OnInit é um interface;
  // Representa um endereço (DTO) - da Api => via-cep-models.ts
  formContato: ViaCepModel = {};

  showForm = new Subject<boolean>();

  // Injetando o serviço
  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {
  }
  // target = o campo com a informação;
  getViaCEP(cep: FocusEvent){
    // Transformando o target em um elemento HTML
    if ((cep.target as HTMLInputElement)?.value) {
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      // Preenche os campos com as informações
      // Const representa um objeto
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe(
        (cepModel) => {
        //Mostra as informações auto-preenchidas
        this.formContato = cepModel;
        this.showForm.next(true);
        }
      )
    }
  }
}

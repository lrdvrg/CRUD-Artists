import { ArtistasService } from './../../../services/artistas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Artistas } from '../../../services/artistas.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public artistaservice: ArtistasService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null){
      form.resetForm();
    }
    this.artistaservice.formData = {
      idArtista: null,
      nombre: '',
      nombre_real: '',
      generos: '',
      link_imagen: '',
      link_canal: '',
    }
  }

  onSubmit(form: NgForm){
    if(form.value.idArtista != null){
      this.updateRecord(form)
    } else{
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm){
    this.artistaservice.postRecord(form.value)
    .subscribe(res=>{
      console.log(res);
      this.resetForm();
      this.toastr.success('Artista agregado', 'Accion completada');
      this.artistaservice.getRecord();
    })
  }

  updateRecord(form: NgForm){
    this.artistaservice.putRecord(form.value)
    .subscribe(res=>{
      console.log(res);
      this.resetForm();
      this.toastr.info('Artista actualizado', 'Accion completada');
      this.artistaservice.getRecord();
    })
  }
}

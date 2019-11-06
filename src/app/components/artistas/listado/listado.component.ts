import { Component, OnInit } from '@angular/core';
import { ArtistasService } from '../../../services/artistas.service';
import { Artistas } from '../../../services/artistas.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  constructor(public artistaservice: ArtistasService, private toastr: ToastrService) { }

  ngOnInit() {
    this.listRecords();
  }

  listRecords(){
    this.artistaservice.getRecord();
  }

  deleteArtista(id: number){
    this.artistaservice.deleteRecord(id).
    subscribe(res=>{
      this.toastr.error('Artista eliminado', 'Accion completada');
      this.listRecords();
    })
  }

  populateForm(artista: Artistas){
    console.log("Click en imagen");
    console.log(artista[0]);

    this.artistaservice.formData = artista[0];
  }
}

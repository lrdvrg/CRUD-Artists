import { Artistas } from './artistas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {
  formData: Artistas;
  data: any;
  constructor(private http: HttpClient) {

  }

  postRecord(form: Artistas){
    return this.http.post('http://localhost:64662/api/Artistas', form)
  }

  putRecord(form: Artistas){
    return this.http.put(`http://localhost:64662/api/Artistas/${form.idArtista}`, form)
  }

  getRecord(){
      this.http.get('http://localhost:64662/api/Artistas').subscribe(res=>{
      console.log(res);
      this.data = res;

    })
  }

  deleteRecord(id: any){
    return this.http.delete(`http://localhost:64662/api/Artistas/${id}`)
  }
}

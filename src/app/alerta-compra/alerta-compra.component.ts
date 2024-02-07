import { Component, OnInit } from '@angular/core';  
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-alerta-compra',
  standalone: true,
  imports: [],
  templateUrl: './alerta-compra.component.html',
  styleUrl: './alerta-compra.component.css'
})
export class AlertaCompraComponent {
  ngOnInit(){  
    
  }  

  simpleAlert(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger me-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Naruto Shippuden",
      text: "Naruto Shippuden es la segunda parte de Naruto",
      imageUrl: "https://i.blogs.es/bc1dd2/naruto/650_1200.png",
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.gifer.com/YAS0.gif")
      left
      no-repeat
    `
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Comprado!",
          text: "Tu producto ha sido comprado, será repartido en los próximos días",
          icon: "success"
        }).then(this.addCarritoTrue);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "No comprado",
          text: "No has comprado el producto",
          icon: "error"
        }).then(this.addCarritoFalse);
      }
    });
  }

  addCarritoTrue(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Gracias por la compra"
    });
  }

  
  addCarritoFalse(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Cancelada la operación"
    });
  }

  alertDragon(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger me-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Dragon ball",
      text: "La primera parte de la vida de Son Goku en la tierra.",
      imageUrl: "https://depor.com/resizer/bR6_WG8aaFnxzbVis8FEhE_-njs=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JI3UINL7ZBHCNJM7XG73RRN5VA.jpg",
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.gifer.com/ZLBh.gif")
      left
      no-repeat
    `
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Comprado!",
          text: "Tu producto ha sido comprado, será repartido en los próximos días",
          icon: "success"
        }).then(this.addCarritoTrue);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "No comprado",
          text: "No has comprado el producto",
          icon: "error"
        }).then(this.addCarritoFalse);
      }
    });
    
  }

  alertSeiya(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger me-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Los cabelleros del zodiaco",
      text: "Los caballeros del zodiaco va de las batallas que tienen que superar Seiya y sus compañeros",
      imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/caballeros-zodiaco-como-acabo-anime-original-saint-seiya.jpg?tf=1200x",
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://64.media.tumblr.com/1eedfe201890bfd38854430582a6bc0e/tumblr_n3bjyfTale1r00ed5o2_250.gif")
      left
      no-repeat
    `
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Comprado!",
          text: "Tu producto ha sido comprado, será repartido en los próximos días",
          icon: "success"
        }).then(this.addCarritoTrue);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "No comprado",
          text: "No has comprado el producto",
          icon: "error"
        }).then(this.addCarritoFalse);
      }
    });
    
  }

  alertOne(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger me-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "One Piece",
      text: "Sigue la aventura de Luffy por convertirse en el rey de los piratas",
      imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x",
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.pinimg.com/originals/71/1e/ab/711eabdcb2a98390783f75007ff6895d.gif")
      left
      no-repeat
    `
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Comprado!",
          text: "Tu producto ha sido comprado, será repartido en los próximos días",
          icon: "success"
        }).then(this.addCarritoTrue);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "No comprado",
          text: "No has comprado el producto",
          icon: "error"
        }).then(this.addCarritoFalse);
      }
    });
    
  }

  alertBleach(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger me-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Bleach",
      text: "La serie narra las aventuras de un adolescente llamado Ichigo Kurosaki",
      imageUrl: "https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2022/07/ichigo42fac639-5a73-4f02-aa43-c5fec1f6baea.jpg",
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://media.tenor.com/f89s9Upy3XEAAAAi/bleach.gif")
      left
      no-repeat
    `
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Comprado!",
          text: "Tu producto ha sido comprado, será repartido en los próximos días",
          icon: "success"
        }).then(this.addCarritoTrue);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "No comprado",
          text: "No has comprado el producto",
          icon: "error"
        }).then(this.addCarritoFalse);
      }
    });
    
  }
}
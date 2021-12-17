import { deletePost } from "../firebase/firebase-data.js";

export function ModalEliminarPost(postData) {
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");

  const $modalCerrar = document.createElement("div");
  $modalCerrar.classList.add("modalCerrarSesion", "modal-cerrar");

  const $modaltexto = document.createElement("div");
  $modaltexto.classList.add("modal-textos");

  const $Titulo = document.createElement("h2");
  $Titulo.classList.add("modal-titulo");
  $Titulo.textContent = "¿Estás seguro de eliminar?";

  const $botonAceptar = document.createElement("div");
  $botonAceptar.classList.add("modal__p-cerrarS");
  const $mensaje = document.createElement("p");
  $mensaje.textContent = "Aceptar";

  const $cerrar = document.createElement("p");
  $cerrar.classList.add("modal__p-cancelar");
  $cerrar.textContent = "Cancelar";

  $modalContenedor.append($modalCerrar);
  $modalCerrar.append($modaltexto);
  $modaltexto.append($Titulo);
  $botonAceptar.append($mensaje);
  $modaltexto.append($botonAceptar);
  $modaltexto.append($cerrar);

  $modalContenedor.style.opacity = "0";
  $modalContenedor.style.visibility = "hidden";

  const abrirModal = () => {
    $modalContenedor.style.opacity = "1";
    $modalContenedor.style.visibility = "visible";
    $modalCerrar.classList.toggle("modal-cerrar");
  };

  const cerrarModal = () => {
    $modalCerrar.classList.toggle("modal-cerrar");
    setTimeout(function () {
      $modalContenedor.style.opacity = "0";
      $modalContenedor.style.visibility = "hidden";
    }, 900);
  };

  $cerrar.addEventListener("click", cerrarModal);

  $botonAceptar.addEventListener("click", () => {
    deletePost(postData.post_id);
    // cerrarModal();
    window.location.hash = "#/";
  });

  return {
    modalEliminarPost: $modalContenedor,
    abrirModalEliminar: abrirModal,
    cerrarModalEliminar: cerrarModal,
  };
}
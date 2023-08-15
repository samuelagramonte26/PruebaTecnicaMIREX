import Swal from "sweetalert2"

export const useNotifications = () => {

    const success = () =>
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Exito!',
            showConfirmButton: false,
            timer: 1800
        });

    const info = (informacion:string) =>
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Informacion!',
            text: informacion,
            showConfirmButton: false,
            timer: 1800
        });

    const error = (error:string) =>
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: error,

        });

    const confirm = (callBack:Function, message = '') =>
        Swal.fire({
            title: 'Estas seguro?',
            text: message != '' ? message : "Esta accion no se podra revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, adelante!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                callBack();
            }
        });
    return {
        error,
        success,
        confirm,
        info,
        
    }
}
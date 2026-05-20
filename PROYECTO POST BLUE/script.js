// ELEMENTOS

const btnLogin = document.getElementById("btnLogin");

   const loginBox = document.getElementById("login-box");




const redSocial = document.getElementById("redSocial");
 

 

const comentario = document.getElementById("comentario");

const btnPublicar = document.getElementById("btnPublicar");

const contenedorPosts = document.getElementById("contenedorPost");


// LOGIN




 
btnLogin.addEventListener("click", function () {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    if (usuario === "" || password === "") {

        alert("Debes ingresar un usuario y contraseña");

    } else {

        loginBox.classList.add("oculto");   

        redSocial.classList.remove("oculto");
    }

});


// PUBLICAR

btnPublicar.addEventListener("click", function () {




    const texto = comentario.value;
 
 
 
    if (texto === "") {

        alert("Escribe cualquier cosa");
        return;
    }




    // CREAR DIV

    
    
    const post = document.createElement("div");




    // AGREGAR CLASE

    post.classList.add("post");

    let likes = 0;

    // HTML DEL POST

    post.innerHTML = `




        <p>${texto}</p>

             <div class="botones-post">
                 
             
            <img src="https://i.pravatar.cc/50" class="avatar">
            
            <button class="btn-like">
                Like ❤️ 0
            </button>

    
    
            <button class="btn-eliminar">
    
            Eliminar
            </button>

        </div>
    `;

    
    
    // AGREGAR POST



    contenedorPosts.prepend(post);



    // LIMPIAR TEXTAREA

    comentario.value = "";



    // BOTÓN LIKE



    const btnLike = post.querySelector(".btn-like");

    btnLike.addEventListener("click", function () {

        likes++;

        btnLike.textContent = `Like ❤️ ${likes}`;
    });



    // BOTÓN ELIMINAR



    const btnEliminar = post.querySelector(".btn-eliminar");

    btnEliminar.addEventListener("click", function () {

        post.remove();

    });

});
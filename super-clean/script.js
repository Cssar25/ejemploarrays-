// elementos 

const btnLogin = document.getElementById("btnLogin");

const loginBox = document.getElementById("loginBox");

const redSocial = document.getElementById("redSocial");

const comentario = document.getElementById("comentario");

const btnPublicar = document.getElementById("btnPublicar");

const contenedorPosts = document.getElementById("contenedorPosts");


// login 

btnLogin.addEventListener("click", function(){
    const usuario = document.getElementById("usuario").value; 
 
    if(usuario === ""){
        alert("debes ingresar un usuario");

    } else{
        loginBox.classList.add("oculto");

        redSocial.classList.remove("oculto");
    }



}); 


// publicar 

btnPublicar.addEventListener("click", function(){
    const texto = comentario.value;


    if(texto === "");{
      
        alert("escribe cualqueir cosa");
      return;
    
    }
});


// crear el div 

const post = document.createElement("div");

// agregar  claase 

post.classList.add("post");


let likes = 0;
 
// html 
post.innerHTML = `

        <p>${texto}</p>

        <div class="botones-post">
        
        <button class="btn-like">
        like ❤️ 0 </button>

         <button class="btn-eliminar">
                Eliminar
            </button>

        </div>

    `;

    // agregar post 

    contenedor.Posts.prepend(post);

    // limpia textarea 

    comentario.value = ""; 

    // boton like 
    const btnlike = post.querySelector(".btn-like");
    btnlike.addEventListener("click", function(){
        likes++;
        btnlike.textContent = "like ❤️ ${likes}";
    });


    // boton de eliminar 

    const btnEliminar = post.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function(){
        post.remove();
    });
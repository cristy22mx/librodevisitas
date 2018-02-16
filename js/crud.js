
var dataCommets = [
            {
              'content': 'Hola amiga',
              'style': {
                'color': 'red',
                'background': 'yellow'
              }
            },
            {
              'content': 'Bye amiga',
              'style': {
                'color': 'purple',
                'background': 'grey'
              }
            },
          ];

var commentsContainer = document.getElementById("history-comment");

/*Función para pintar el comentario en pantalla con la data falsa*/

function drawDataComments (){
	commentsContainer.innerHTML = " ";
for ( var i = 0; i< dataCommets.length; i++){
	var sectionDom = createDomCommentFromData(dataCommets[i]);
	commentsContainer.appendChild(sectionDom);
	}
}


function createDomCommentFromData (data){
	var commentContent = data.content;
	var commentDom = document.createElement("div");
	commentDom.innerHTML = commentContent;
	commentDom.className = "personal-comment";
	Object.assign(commentDom.style, data.style)
	return commentDom;
}

// drawComments();

/*variable para agregar el evento en el botón*/

var buttonSend = document.getElementById("send");

buttonSend.addEventListener("click", addComment);


function addComment (){
	var commentTextPreview = document.getElementById("preview");
	var newCommentTextPreview = commentTextPreview.innerHTML;
	newComment = {content: null, style:{}};
	newComment.content = newCommentTextPreview;
	Object.assign(newComment.style, commentTextPreview.style); /*copia los estilos del objeto*/
	dataCommets.unshift(newComment);
	drawDataComments();
}

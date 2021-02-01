function doOnAll(query,func){
    document.querySelectorAll(query).forEach(function(element){
        func(element)
    })
}
doOnAll(".menu li a",function(element){
    console.log("bind event",element)
    element.addEventListener("click",function(e){
        doOnAll(".menu li a",function(element_){
            console.log(element_)
        element_.parentElement.classList.remove("active")
    })
        console.log("clicked",e.target)
        e.target.parentElement.classList.add("active")
    })
})
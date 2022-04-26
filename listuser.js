<html>
    <body>
        <form onsubmit="saveToLocalStorage(e)">
            <label>Name:</label>
            <input type="text" name="username" required>
            <label>Email:</label>
            <input type="email" name="emailId" required>
            <label>Mobile No:</label>
            <input type="number" name="phoneNo" required>
            <button>Submit</button>
        </form>
        <ul id="listOfUser"></ul>
        <script>
            function saveToLocalStorage(e){
                event.preventDefault();
                const name=e.target.username.value;
                const email=e.target.emailId.value;
                const mobile=e.target.phoneNo.value;
              
                const newObj={
                    name:name;
                    email:email;
                    mobile:mobile;
                }
                localStorage.setItem(newObj.email,JSON.stringify(newObj));
                showUser(newObj)
            }
            function showUser(user){
                const parentNode=document.getElementById("listOfUser");
                const childHTML=`<li> ${user.name} - ${user.email} </li>`;
                parenrNode.innerHTML=parenrNode.innerHTML+childHTML;
            }
        </script>
    </body>
</html>

<% if(typeof(email) !== 'undefined') {%>
    <li class="menu">
      <form action="/logout" method="POST">
        <button type="submit" class="mt-1 text-success btn btn-outline-dark">Logout</button>
      </form>
    </li>
    <% }else{ %>
    <li class="menu">
      <a class="nav-link btn-outline-success link-houver border-0" style="border-radius: 20px;" href="/#login"
        >Login</a
      >
    </li>
    <% } %>
    <li class="link-cadastrar menu btn-outline-outline-warning">
      <a class="nav-link-cadastro nav-link"><%= email %></a>
    </li>
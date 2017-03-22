<home>

  <div class="container-fluid">

    <div class="row mt-2">      
      <div class="col-2">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">Demillitarized</h4>
          </div>
        </div>
      </div>
      <div class="container-fluid col-10">
        <div class="row">
          <div class="col" each={service in this.services}>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">{service.Spec.Name}</h4>
                <p class="card-text">
                  <b>Image: </b>{sanitize(service.Spec.TaskTemplate.ContainerSpec.Image)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">      
      <div class="col-2">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">Trusted</h4>
          </div>
        </div>
      </div>
      <div class="container-fluid col-10">
        <div class="row">
          <div class="col" each={service in this.services}>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">{service.Spec.Name}</h4>
                <span class="card-text">
                  <strong>Image: </strong>{sanitize(service.Spec.TaskTemplate.ContainerSpec.Image)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   

    <div class="row mt-2">      
      <div class="col-2">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">Restricted</h4>
          </div>
        </div>
      </div>
      <div class="container-fluid col-10">
        <div class="row">
          <div class="col" each={service in this.services}>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">{service.Spec.Name}</h4>
                <p class="card-text">
                  <b>Image: </b>{sanitize(service.Spec.TaskTemplate.ContainerSpec.Image)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     

  </div>



  <script>
    const self = this;

    this.sanitize = (str) => {
      return str.substring(0, str.indexOf('@'));
    }

    $.get('/api/services', (s) => {
      self.services = s;
      self.update()
    });
  </script>

</home>
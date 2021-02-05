 <template>
  <div>
    <CCard>
      <CCardHeader>
        <strong><h2>LEAVE FORM</h2></strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow>
            <CCol class="col-sm-3">Subject</CCol>
            <CCol sm="9">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter leave subject"
                  class="form-control"
                />
                
              </div>
            </CCol>
          </CRow>

          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Date</CCol>
            <CCol sm="3">
              <span>from</span>
              <div class="form-group">
                <input type="date" 
                 placeholder="Vehicle capacity....."
                class="form-control" />
              </div>
            </CCol>
          
            
            <CCol sm="3">
              <span>TO</span>
              <div class="form-group">
                
                <input
                  type="date"
                  placeholder="Enter basic fare....."
                  class="form-control"
                />
              </div>
            </CCol>
          </CRow>

          <!-- ******************************************************* -->
          <CRow>
            <CCol class="col-sm-3">Reason</CCol>
            <CCol sm="9">
              <div class="form-group">
                <textarea
                  placeholder="Enter basic distance....."
                  class="form-control"
                />
              </div>
            </CCol>
          </CRow>
          <CButton
            type="submit"
            class="btn btn btn-success"
            style="margin-left: 50%"
            >Submit</CButton
          >
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>


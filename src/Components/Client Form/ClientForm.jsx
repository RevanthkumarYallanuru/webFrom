import React from 'react'
import "./ClientForm.css"

const ClientForm = () => {
  return (
    <div>
      <div className="title"> <h2>Welcome 👋</h2> <label htmlFor="headdingtitle">Kindly fill in your datails</label></div>
      <div className="bango">
        <div className="modex">
              <div className="row1">
                  <div className="cl1">
                    <label htmlFor="Name">Name of the Student*</label><br/>
                    <input type="text" required placeholder='Enter your name ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Email Address*</label><br/>
                    <input type="text" required placeholder='Enter email address ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Mobile number*</label><br/>
                    <input type="text" required placeholder='Enter Mobile number ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Current Address*</label><br/>
                    <input type="text" required placeholder='Enter Current Address ' id='inputs'/>
                  </div>
              </div>

        
          <div className="row1">
                  <div className="cl1">
                    <label htmlFor="Name">Name of the College*</label><br/>
                    <input type="text" required placeholder='Enter your College name ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Roll No*</label><br/>
                    <input type="text" required placeholder='Enter your Roll No ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Branch*</label><br/>
                    <input type="text" required placeholder='Enter your Branch ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Year of the Study*</label><br/>
                    <input type="text" required placeholder='Enter your Current Year ' id='inputs'/>
                  </div>
              </div>
           

              <div className="row1">
                  <div className="cl1">
                    <label htmlFor="Name">Acadamic Performance (Latest)*</label><br/>
                    <input type="text" required placeholder='Enter your latest Sem CGPA  ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Streamed From*</label><br/>
                    <input type="text" required placeholder='Streamed From ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Weekly Hours commited to this program*</label><br/>
                    <input type="text" required placeholder='Enter your Time You can spend ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Are you Involved in any programs*</label><br/>
                    <input type="text" required placeholder='Enter your Programs ' id='inputs'/>
                  </div>
              </div>
            <div className="dix">
            
              <div className="col1">
                  <div className="cl1">
                    <label htmlFor="Name">Projects*</    label><br/>
                    <input type="text" required placeholder='Enter your Projects ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Github Profile*</label><br/>
                    <input type="text" required placeholder='Enter your Github profile Link ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Which Domain are you Intersted in*</label><br/>
                    <input type="text" required placeholder='Enter your Intrests  ' id='inputs'/>
                  </div>
                  
                  <div className="cl1">
                    <label htmlFor="Name">What is your short term Goal*</label><br/>
                    <input type="text" required placeholder='Enter your Goal  ' id='inputs'/>
                  </div>

              </div>
             
              <div className="col1">
                  <div className="cl1">
                    <label htmlFor="Name">Internships*</    label><br/>
                    <input type="text" required placeholder='Enter your internship details' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Linkedin Profile*</label><br/>
                    <input type="text" required placeholder='Linkedin profile Link ' id='inputs'/>
                  </div>

                  <div className="cl1">
                    <label htmlFor="Name">Why are you intrested in this program*</label><br/>
                    <input type="text" required placeholder='Enter your Intrests  ' id='inputs'/>
                  </div>
                  
                  <div className="cl1">
                    <label htmlFor="Name">What do you expecting through this program*</label><br/>
                    <input type="text" required placeholder='  ' id='inputs'/>
                  </div>

              </div>
              
              <label htmlFor="Name">Skills*</label>
             
              <div className="col1">
                <div className="box">
                <div className="sk1">
                  <label htmlFor="HTML">
                  <input type="checkbox" name="HTML" id="" value="HTML" /> HTML
                  </label>

                  <label htmlFor="CSS">
                  <input type="checkbox"id="" value="Blender" class="accent-your-accent-color bg-gray-500" /> CSS
                  </label>
                  
                  <label htmlFor="JS">
                  <input type="checkbox" name="JS" id="" value="HTML" /> JS
                  </label>
                  
                  <label htmlFor="TailWindCSS">
                  <input type="checkbox" name="TailWindCSS" id="" value="TailWindCSss" /> TailWindCss
                  </label>
                  
                  <label htmlFor="ReactJS">
                  <input type="checkbox" name="ReactJS" id="" value="ReactJS" /> ReactJS
                  </label>
                  
                  <label htmlFor="AngularJs">
                  <input type="checkbox" name="Flutter" id="" value="Flutter" /> Flutter
                  </label>
                  
                  <label htmlFor="Vue JS">
                  <input type="checkbox" name="Vue Js" id="" value="HTML" /> Vue JS
                  </label>
                  
                </div>
                 



                <div className="sk1">
                  <label htmlFor="nodejs">
                  <input type="checkbox" name="nodejs" id="" value="nodejs" /> NodeJs
                  </label>

                  <label htmlFor="No-SQL">
                  <input type="checkbox" name="No-SQL" id="" value="No-SQL" /> No-SQL
                  </label>
                  
                  <label htmlFor="MongoDB">
                  <input type="checkbox" name="MongoDB" id="" value="MongoDB" /> MongoDB
                  </label>
                  
                  <label htmlFor="Nodemon">
                  <input type="checkbox" name="Nodemon" id="" value="Nodemon" /> Nodemon
                  </label>
                  
                  <label htmlFor="Material UI">
                  <input type="checkbox" name="Material UI" id="" value="Material UI" /> Material UI
                  </label>
                  
                  <label htmlFor="Express Js">
                  <input type="checkbox" name="Express Js" id="" value="Express Js" /> Express Js
                  </label>
                  
                 
                  
                </div>

                <div className="sk1">
                  <label htmlFor="SQL">
                  <input type="checkbox" name="SQL" id="" value="SQLL" /> SQL
                  </label>

                  <label htmlFor="firebase">
                  <input type="checkbox" name="firebase" id="firebase" value="firebase" /> firebase
                  </label>
                  
                  <label htmlFor="Django">
                  <input type="checkbox" name="Django" id="Django" value="Django" /> Django
                  </label>
                  
                  <label htmlFor="Flask">
                  <input type="checkbox" name="Flask" id="Flask" value="Flask" /> Flask
                  </label>
                  
                  <label htmlFor="Wordpress">
                  <input type="checkbox" name="Wordpress" id="" value="Wordpress" /> Wordpress
                  </label>
                  
                  <label htmlFor="Flutter">
                  <input type="checkbox" name="Flutter" id="" value="Flutter" /> Flutter
                  </label>
                  
                  
                </div>


                <div className="sk1">
                  <label htmlFor="Java">
                  <input type="checkbox" name="Java" id="" value="Java" /> Java
                  </label>

                  <label htmlFor=" Python">
                  <input type="checkbox" name=" Python" id="" value=" Python" /> Python
                  </label>
                  
                  <label htmlFor="Post man">
                  <input type="checkbox" name="Post man" id="" value="HTML" /> Post man
                  </label>
                  
                  <label htmlFor="Wix">
                  <input type="checkbox" name="Wix" id="" value="Wix" />Wix
                  </label>
                  
                  <label htmlFor="Figma">
                  <input type="checkbox" name="Figma" id="" value="Figma" /> Figma
                  </label>
                  
                 
                  <label htmlFor="Spline">
                  <input type="checkbox" name="Spline" id="" value="Spline" /> spline
                  </label>
                  
                </div>


                <div className="sk1">
                  <label htmlFor="Blender">
                  <input type="checkbox" name="Blender" id="" value="Blender" /> Blender
                  </label>

                  <label htmlFor="Adobe After effects">
                  <input type="checkbox" name="Adobe After effects" id="" value="Adobe After effects" /> Adobe After effects
                  </label>
                  
                  <label htmlFor="Adobe premier pro">
                  <input type="checkbox" name="Adobe premier pro" id="" value="HTML" /> Adobe premier pro
                  </label>
                  
                  <label htmlFor="Adobe photo shop">
                  <input type="checkbox" name="Adobe photo shop" id="" value="Adobe photo shop" />Adobe photo shop
                  </label>
                  
                </div>
                
                </div>
               
                
              </div>
             


             </div>

             <div className="final">
                <div className="part1">
                  <label htmlFor="Name">Upload Your Resume*</label><br/>
                  <input type="file" required="True" id='fileip'/>
                  <label for="fileip"></label>
                </div>

                <div className="part2">
                <label htmlFor="Agree">
                  <input type="checkbox" name="Agree" id="" value="Agree" /> I agree and continue  
                  </label>
                  <div className="subs">
                    Submit
                  </div>
                </div>
        </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default ClientForm

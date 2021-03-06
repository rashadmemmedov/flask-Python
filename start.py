from enum import unique
import re
from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
import os
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database/data.db"
app.config['UPLOAD_PATH']='static/upload'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)



# modellerin yazilmasi
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    writingBox1=db.Column(db.Text)
    writingBox2=db.Column(db.Text)
    writingBox3=db.Column(db.Text)
    writingBox4=db.Column(db.Text)
    writingBox5=db.Column(db.Text)
    writingBox6=db.Column(db.Text)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    yourName=db.Column(db.String(50),nullable='False')
    yourEmailAddress=db.Column(db.String(255),nullable='False')
    contactPhone=db.Column(db.Integer,nullable='False')
    yourProfession=db.Column(db.String,nullable='False')
    request=db.Column(db.Text,nullable='False')
    
class Master(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    masterName=db.Column(db.String(50),nullable='False')
    masterProfession=db.Column(db.String,nullable='False')
    masterAbout=db.Column(db.String,nullable='False')
    masterImg=db.Column(db.String,nullable='False')

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    yourName=db.Column(db.String(50),nullable='False')
    yourAddress=db.Column(db.String(255),nullable='False')
    City=db.Column(db.Integer,nullable='False')
    postCode=db.Column(db.String,nullable='False')
    message=db.Column(db.Text,nullable='False')
    phoneNumber=db.Column(db.String,nullable='False')
    yourEmail=db.Column(db.String,nullable='False')

titleHeader='header'
titleAbout='about'
titlePages='pages'
titleService='service'
titleSingleServices='singleServices'
titlePortfolio='portfolio'

# header sehifesinin yazilmasi
@app.route("/")
def header():
    masters=Master.query.all()
    return render_template('header.html',title1=titleHeader,masterList=masters)

# about sehifenin yazilmasi
@app.route("/about")
def about():
    posts=Post.query.all()
    return render_template('about.html',title2=titleHeader,postList=posts)

# contact hissenin yazilmasi
@app.route("/contact")
def pages():
    return render_template('pages.html',title3=titleHeader)

# service hissenin yazilmasi
@app.route("/service")
def service():
    return render_template('service.html',title4=titleHeader)

# singleService hissenin yazilmasi
@app.route("/singleServices")
def singleServices():
    posts=Post.query.all()
    return render_template('singleServices.html',title5=titleHeader,postList=posts)

# portfolio hissenin yazilmasi
@app.route("/portfolio")
def portfolio():
    return render_template('portfolio.html',title6=titleHeader)




# about/add routunun yazilmasi
@app.route("/about/add",methods=["GET","POST"])
def aboutAdd():
    if request.method=='POST':
        post=Post(
        writingBox1=request.form['aboutbox1'],
        writingBox2=request.form['aboutbox2'],
        writingBox3=request.form['aboutbox3'],
        writingBox4=request.form['aboutbox4'],
        writingBox5=request.form['aboutbox5'],
        writingBox6=request.form['aboutbox6'])
        db.session.add(post)
        db.session.commit()
        print(" Məlumat ugurla yuklendi") 
        return redirect("/about/add")
    return render_template('admin/aboutAdd.html')

# admin hissede all routunun yazilmasi
@app.route("/all")
def All():
    posts=Post.query.all()
    users=User.query.all()
    masters=Master.query.all()
    return render_template('admin/all.html',postList=posts,userList=users,masterList=masters)
@app.route("/about/delete/<int:id>")
def aboutDelete(id):
    postId=Post.query.get(id)
    db.session.delete(postId)
    db.session.commit()
    return redirect('/all')
@app.route("/about/update/<int:id>", methods=["GET","POST"])
def aboutUpdate(id):
    post=Post.query.get(id)
    if request.method=='POST':
        newWritingBox1=request.form['aboutbox1']
        newWritingBox2=request.form['aboutbox2']
        newWritingBox3=request.form['aboutbox3']
        newWritingBox4=request.form['aboutbox4']
        newWritingBox5=request.form['aboutbox5']
        newWritingBox6=request.form['aboutbox6']
        post.writingBox1=newWritingBox1
        post.writingBox2=newWritingBox2
        post.writingBox3=newWritingBox3
        post.writingBox4=newWritingBox4
        post.writingBox5=newWritingBox5
        post.writingBox6=newWritingBox6
        db.session.merge(post)
        db.session.flush()
        db.session.commit()
        return redirect("/all")
    return render_template('admin/aboutUpdate.html',post=post)

@app.route("/registration",methods=['POST','GET'])
def Resgistration():
    if request.method=='POST':
        user=User(yourName=request.form['name'],yourEmailAddress=request.form["email"],contactPhone=request.form["contact"],
        yourProfession=request.form["profession"], request=request.form["request"])
        db.session.add(user)
        db.session.commit()
        return redirect("/")
    return render_template('header.html')
# mail rutunun yazilmasi 
@app.route("/mail")
def Mail():
    users=User.query.all()
    return render_template('admin/mail.html',userList=users)
@app.route("/registration/delete/<int:id>")
def deleteReg(id):
    userId=User.query.get(id)
    db.session.delete(userId)
    db.session.commit()
    return redirect("/all")
@app.route("/mail/delete/<int:id>")
def deleteMail(id):
    userId=User.query.get(id)
    db.session.delete(userId)
    db.session.commit()
    return redirect("/mail")

# master rutunun yazilmasi
@app.route("/header/master",methods=["POST","GET"])
def MasterAdd():
    if request.method=='POST':
        f = request.files['masterimg']
        filePath=f"{app.config['UPLOAD_PATH']}/{f.filename}"
        f.save(os.path.join(app.config['UPLOAD_PATH'],f.filename))
        master=Master(
        masterName=request.form['mastername'],
        masterProfession=request.form['profession'],
        masterAbout=request.form['masterabout'],
        masterImg=filePath)
        db.session.add(master)
        db.session.commit()
        return redirect("/header/master")
    return render_template("admin/master.html")
@app.route("/master/delete/<int:id>")
def masterDelete(id):
    masterId=Master.query.get(id)
    db.session.delete(masterId)
    db.session.commit()
    return redirect("/all")
if __name__=='__main__':
    app.run(debug=True)
    manager.run()
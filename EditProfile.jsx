import React from 'react'
import "../../css/Profile.css";
import toast from 'react-hot-toast';
import {useDispatch, useSelector} from "react-redux";
import { updateUser } from '../../store/User/user-action';
import { userActions } from '../../store/User/user-slice';
import {useForm} from "@tanstack/react-form";
import { useNavigate } from 'react-router-dom';
import { use } from 'react';

const EditProfile = () => {
  const {user,errors, loading} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = React.useState(user.avatar.url||"https://i.pravatar.cc/150?img3");
  const originalUserData = {
    name: user?.name||"",
    phoneNumber: user?.phoneNumber||"",
    avatar: user?.avatar?.url||"",
  };
  const onChange=(e)=>{
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        form.setFieldValue("avatar", reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const form = useForm({defaultValues: {name:"",phoneNumber:"",avatar:""},
    onSubmit:({values})=>{
    const updateFields={};
    if(values.name !== originalUserData.name) updateFields.name = values.name;
    if(values.phoneNumber !== originalUserData.phoneNumber) updateFields.phoneNumber = values.phoneNumber;
    if(values.avatar !== originalUserData.avatar) updateFields.avatar = values.avatar;
    if(Object.keys(updateFields).length === 0){
      toast.error("No changes made to update");
      return;
    }
    dispatch(updateUser(updateFields));
    navigate("/profile");
    toast.success("Profile Updated Successfully");
  }
});
useEffect(() => {
    if(errors && errors.length>0){  
    toast.error(errors);
    dispatch(userActions.clearErrors());  
    }
    else if(user){
      form.setFieldValue("name", user.name);
      form.setFieldValue("phoneNumber", user.phoneNumber);
      form.setFieldValue("avatar", user.avatar.url|| "https://i.pravatar.cc/150?img3");
    }
    },[user])
return  (
  <Fragment>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 updateprofile">
          <form onSubmit={(e)=>{
            e.preventDefault(); 
            form.handleSubmit();}} 
            encType='multipart/form-data'>
            <h1 className="mb-3">Update Profile</h1>
            <form.Field name="name">
              {(field)=>(
                <div className="form-group">
                  <label htmlFor="name_field">Name</label>
                  <input
                    type='text'
                    id="name_field"
                    className='form-control'
                    value={field.state.value}
                    onChange={(e)=>field.handleChange(e.target.value)}/>
                </div>)}
            </form.Field>
            <form.Field name="phoneNumber">
              {(field)=>(
                <div className="form-group">
                  <label htmlFor="phone_field">Phone Number</label>
                  <input
                    type='number'
                    id="phone_field"
                    className='form-control'
                    value={field.state.value}
                    onChange={(e)=>field.handleChange(e.target.value)}/>
                </div>)}
            </form.Field>
            <form.Field name="avatar">
              {(field)=>(
                <div className='form-group'>
                  <label htmlFor='avatar_upload'>Avatar</label>
                  <div className='d-flex align-items-center'>
                    <div>
                      <figure className='avatar mr-3 item-rtl'>
                        <img
                        src={avatarPreview}
                        className='rounded-circle'
                        alt='avatar preview'/>
                      </figure>
                    </div>
                    <div className='custom-file'>
                      <input
                        type='file'
                        name={field.name}
                        className='custom-file-input'
                        id='avatar_update'
                        accept='image/*'
                        onChange={onChange}/>
                      <label className='custom-file-label' htmlFor='customFile'>
                        Choose Avatar
                      </label>
                    </div>
                  </div>
                </div>)}
            </form.Field>
            <button type="submit" className="btn update-btn btn-block">{loading? "Updating":"update"}</button>
          </form>
        </div>
      </div>
  </Fragment>
  )
}

export default EditProfile
import supabase, { supabaseUrl } from "./supabase"

export async function getCabins(){

let { data, error } = await supabase
.from('cabins')
.select('*')

if(error){
    console.error(error);
    throw new Error("Cabins could not be loaded");
}

return data;
}


export async function createCabin(newCabin){

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/","");

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    //https://ilsnqnrhkvpglpodeftp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
    
    // 1. Create cabin
    const { data, error } = await supabase
    .from('cabins')
    .insert([
   {...newCabin, image: imagePath}
    ])
    .select()

    if (error) {
        console.log(error);
        throw new Error("Cabin could not be created")
    }



    //2. Upload Image

    const { error: StorageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)
    

    if (StorageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.log(StorageError);
        throw new Error("File could not be uploded")
    }
    return data;
}

export async function deleteCabin(id){
    
    const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id);

    if (error) {
        console.log(error);
        throw new Error("Cabin could not be deleted")
    }

    return data;
    
    }
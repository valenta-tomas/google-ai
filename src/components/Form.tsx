"use client";
import {submitForm} from "@/app/action"
import InputText from "@/components/form/InputText"
import InputSelect from "@/components/form/InputSelect"


export default function Form() {
    return (
        <form className="w-full" action={submitForm}>
            <InputText label={"Téma"} name={"tema"}/>
            <InputText label={"Gramatika/slovíčka"} name={"gramatika/slovicka"}/>
            <InputSelect values={["ahoj","Psdf","SDF"]}/>
            <InputSelect values={["ahoj","Psdf","SDF"]}/>
            <input type="submit" value="odeslat" />
        </form>
    );
  }
  
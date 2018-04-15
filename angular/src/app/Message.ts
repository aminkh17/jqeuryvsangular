export class Message {
    Text: string;
    Class: string;
    Visible: boolean;
    Delay: number;

    CssClass(){
        return this.Class;
    }

    constructor(text:string, failed: boolean = false, delay: number = 5){
        console.log(text);
        this.Text = text;
        this.Delay = delay;
        if(failed)
            this.Class = "failed";
        else
            this.Class = "success";
        this.Visible = true;
        setTimeout(()=>{
            this.Visible = false;
        },1000*this.Delay);       
    }
}
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

export function Zip2Address() {
    const ZipControl = document.getElementById('ZipCode') as HTMLInputElement;
    const AddressControl = document.getElementById('Address') as HTMLTextAreaElement;

    if ((ZipControl != null) && (AddressControl != null)) {
        AddressControl.value = '';
        
        const ZipCode = ZipControl.value;

         if (ZipCode.match(/^\d{7}$/) == null) {
            alert("'" + ZipCode + "'は郵便番号ではありません。");

            return;
        }
        
        const option: AxiosRequestConfig
        = {
            method: 'GET',
            params: { 'ZipCode': ZipCode }
        };
        axios.get<any, AxiosResponse, any>('https://tahprpe7ixyrlnde7kccfiewj40afjyi.lambda-url.ap-northeast-3.on.aws', option)
        .then((response: {data: { _: [[string]] }; }) => {
            for (const Line in response.data) {
                console.log(Line);
            };
            AddressControl.value = '0123456789';
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }
}

# Conversion of Rijndael

## Csharp

```
Public Function Encrypt(ByVal plainText As String) As String
       Dim passPhrase As String = "minePadsdsdsdssPhrase"
       Dim saltValue As String = "sdsd"
       Dim hashAlgorithm As String = "SHA1"
       Dim passwordIterations As Integer = 2
       Dim initVector As String = "@1B2c3D4e5F6g7H5"
       Dim keySize As Integer = 256
       Dim initVectorBytes As Byte() = Encoding.ASCII.GetBytes(initVector)
       Dim saltValueBytes As Byte() = Encoding.ASCII.GetBytes(saltValue)
       Dim plainTextBytes As Byte() = Encoding.UTF8.GetBytes(plainText)
       Dim password As New PasswordDeriveBytes(passPhrase, saltValueBytes, hashAlgorithm, passwordIterations)
       Dim keyBytes As Byte() = password.GetBytes(keySize \ 8)
       Dim symmetricKey As New RijndaelManaged()
       symmetricKey.Mode = CipherMode.CBC
       Dim encryptor As ICryptoTransform = symmetricKey.CreateEncryptor(keyBytes, initVectorBytes)
       Dim memoryStream As New MemoryStream()
       Dim cryptoStream As New CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write)
       cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length)
       cryptoStream.FlushFinalBlock()
       Dim cipherTextBytes As Byte() = memoryStream.ToArray()
       memoryStream.Close()
       cryptoStream.Close()
       Dim cipherText As String = Convert.ToBase64String(cipherTextBytes)
       Return cipherText
End Function
```

## Javascript Encription

```
const encrypt = function (data) {
	const passPhrase = "minePassPhrase";
	const hashAlgorithm = "SHA1";
	const passwordIterations = 2;
	const keySize = 256;

	const initVector = "@1B2c3D4e5F6g7H8";
	const saltValue = "mySaltValue";

	const initVectorBytes = Buffer.from(initVector.substring(0, 32),"binary");
	const saltValueBytes = Buffer.from(saltValue.substring(0, 32),"binary");
	const plainTextBytes = Buffer.from(data.substring(0, 32),"binary");

	const key = derp(passPhrase, saltValueBytes, passwordIterations, hashAlgorithm, Math.floor( keySize / 8 ));

	const cipher = crypto.createCipheriv('aes-256-cbc', key, initVectorBytes);
	const output = Buffer.concat([cipher.update(plainTextBytes, 'binary'), cipher.final()]);

	return output.toString('base64');
}
```

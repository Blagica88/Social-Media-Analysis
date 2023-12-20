import React from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 19px;
  border: 1px solid #e1e8e3;
  background: #fff;
  height: 80px;
  padding: 20px;
  margin-top: 20px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: Lato;
  font-size: 12.702px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Totals = () => {
  return (
    <Container>
      <Card sx={{ width: "350px" }}>
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASCsKkp7MDiFKD7v4egbW87Sp7DfVYwa8Dw&usqp=CAU" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Social media users
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            4.95B
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ364RLrVEcHsle3LPaBtTWJTxiKZat5n1jhQ&usqp=CAU" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Most frequrenly used source
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            Facebook
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="data:image/png;base64,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" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Most frequrenly used location
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            China
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAolBMVEX///8REiQAAADa2tsxLzsuLDk2M0AtKjj09PSdnKFCQEuWlZlCQE0rKDchHy3v7/C5uLuop6vl5eYmIzLNzc9jYmmxsLR8e4BKSFJcWmOJh46/v8JUU1w4NkM8OkUAABoAABUAABxycXjV1NdOTFeQj5WFhIlranHGxskAAAsYFCdwb3YNByE0MT8WESerq644Nz8UFiYJDSUoKTNGRlMeIC6+euI8AAAO1klEQVR4nO2dCXuiPBeGVbKwNGxhEQRUFLS1TOu87f//a18QcMMFbdQ6H/d1zUzcMI9JTk5OTphOp6WlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWl5TpE7RoeXevzmHJ0BaH76HqfRScRvBgU9sVHV/wcOgSGcykxegZh6uV1lGAr7GG0wrZphT2Qf12YNp/PV3UV5/NB4VewgnnkQ08kbEqJmuaPXZVQLy98vBEaHnGdnkhYDBCW8scSRiDOCwOCQHCk+k8krGOaZb/bLhyr/TMJu4j/e2Hi8Ua/ObcTNkkCoqpUdgfX1OvH3EqYOcMggxBDkJHpI6TdSJgOEUCxM5/ryQtENL2ydj+ACbv8Q8Y5YQ4NgVJNgnof4fuvuNlP616Md2YFbakRmmweajOAk1sL2UfHEbiYMDopTPwKQ2HnGQ+pkyNvvhU6jOyLmZ4WJkG8Zy60CHk3lVFHx/yNRx/Z+08ZGN+5yW5gFScU1uy7FoE7j7IbCDPAAUM7A7OLv+ZHXC9MVPyDJF4Y1T+igOl9vavrhRlvx2xmGNQ/YgD5WYSZwRHk6OvIR36O2BinFMaK64/uFS6tpQRo/UkX8LD3aSQ3JloJ8yM5cvKPfrDCyn5Z7BrHxvtpYXNChdqTfcDBXxSjEDXeXyiERQTSlT8XU/jfNC8YbxCTI9Gc08LEENRcwznGcw7CZBQbDXHDlTCBFVdOq8YKq99b/DAk68gXnBkwKcj2m8xDPGyHKMOPpu8d3GDZYsJ9ByqBpHGNTiDKwGj63pusxwwKdpwqifJxFR8urONiNF37hiZ71Oeyuft4YZ2UhnCmm2JHs9IQgP6xmPJl/AJhHQfBDEMMIQYA84oM/AZhHU0KCI4iQOW0PqtdSSXMsqyiCwiWVVzctKy9ZZEO8dy6lBQ08o9MJ8oSgaOLWAoz3jCm+WUnrPCWK9NUVtD3hOVZA/gyzoQG1mjh/lKaizCdEvqSPxYIIThvOzFiT+16AEwYJpeCGguD+vl3XSxss62gmWZhbsX1lsNGGBXMC9GSZl3xZsKacNPYfSusIa2wTitsl7m6aPS+Gwi77bKl03A/j7+w0D4cGqszK1bQVur7q4nA9P10tb7UEj91flgR/sKisOn+QhkawBjQVbLAjALczwuSCiA95ZSLmjlh7tXEPB70uYGwqdeQaSHMYMWVSzLwvGA1QAVW8I99g6n79gumlHkhlGbTWJkfXG/xFwZvaTwEJQBsMcIcTMogOG94HM2c+nWeySqKg0BlolB/IQ2s3BmbzJ3EljEEUHX31ydPJMzpEwRBrO8NPnEieRQgutiV9jTCrIAgIjuH4xeCz6TBdPtqTyJMTFWEgxMLLFEJQbYt5TmECX0A5DMzm5bSiG4a7aHCcMN0CB2G1D0fRLNkAILqbTcSZiFUxC21rywrtt08gPb289kKOkRNACHcbi7RMtxphDIke76zfUnRJSEQKmH4FsKY7wDecz3zLivkQRztHYC33cZkwrLz/kl+6uNrU31RX2CyeRVS2d8K80s4zIqQkZa9cdiKqAkTDUkqrutIUvFrDyTJ2B1SOgaKdA6jH6FNzFNLZIIyij03/2QSf6kQAeJt2kYnVZ7HnEfEviasEY2Mh56hzQ6ylIdA+9J25s3ADSHC/XXrDGgEbnFgibcwC4fr2LvVxwi6tZwNUQ8IMy7VpXR8aB/6x3AWpkVra9AxWPVnhyO7upyBfvUSa9YbZLxxFjZD61iki1F21M7l9pBU83cMKP8sRb7CdAqrpJoFBN6pJZqehbTULbJm5p7/wFWYJq8NhwvhmfSaCYqqNrMo/87IhCWThkhoJUy0JqVBmEysQgdbHucWQ4Gw7IgKPp82JOCQlOPMzTC3bZa1sAg1DcODYgUdULJcrZfTN6KutlWdd0KR1tEgKiNSA1pPaqszAWG5jW6GKOYvDNCGwEKY/UbflPyzyRtVV+2iv1OVVVEBavG7i+HnsRMhOzhre5gAyLnJWFdUTKEZRlZ0RVYsPrwusCuwV0jVYC6gx7IjdnGz8o0a4Z3Kx9F46Lis5YTUbYEozA+4giII+0XJRZivYeQozEalB7FA0V5HHMSIkrcDX+Tg0jJOKN99P47CzBCuzigxaweUnVeEgGSAqO8Hai72q6yOPmfzwU/YgJTjPwG7Xq1BEexL1uFQ9weGxdyhANC0Ho3gJywF5XCJ0E7el0E/0fEogRaVzWsRvinO/IR5xSG5/dEyp+HLKddqBoqRqYXNI7dNKIVpkqIU1TEUpVjx6Yoi7S00IUiUYyRRmW0mASJuXz+MTqbaMFtavF79MJwohSkqAKNVaOAdgPEqNDCshwbI+qTEgRBBRApjb+8kfUm4nn++g1k1MJ+80jWlMKEvv6xGhubJL/bqF49f5OlesDZ4KYki+WUPOVKLXz7cmWoPHBjYg4LCmHI+GnjJGFujqfVm+Cgz6DW4HaESzk9PQZljqmPEJz2s4Eph9eqyobX6V4Bky8X4OL82jcsuaGH8K4UpIFz9O4Hb6cvVsyfwy2licjSt+Cq4CUtAcebB2hHmk/65iyVglevEfhHC08G/cYtNvLPh3arFLPw7hW2NsWZLlgr3VmPsign/kDADrq3iZTH4oJyYBzjjK6w+JZ0nqgvTsVq4vuGeb38OUr7fgDLPiPAl6RBbXkZd2ISSwon1Ljv9ZaplC6e8PY/P2VH/76hfmNWFabisoALgJRUYVL6izd1XvHyX49AYW3sQFrnIerhgWlxTLtepnOBmFVkNy8gAyi6IfrLvL1JfJgRfZk3PX5iTMAeDok+lGWruzeq4bF8J8A1z8xNmonLimJALZpCgigBNm4RYL4CfsI5XxWXs5uekBgQXawGBwp/mz+3CUdhH5UzNCWw6lckRKgpJRm8TVyxiuUWhGCpaVahzWJioVlGcGTpwQPEQSbUzJsL6yb+fUQpz/lB19dtN3ihdLYVFrNI/RxaJh4V1fFQ6HyYJzzr1OXOclUFx5mlyPoZfCesSunJiJ38I+ZP/3KJKyfsRr++IMJOg0tA7tMlsa0ZhuXehyYj3YfWqKwrFDtfqrE7ZFavTO3WOCGNeURUbTAE8O5lpUVjtXSSA+30TOBqPnTtW2ICcUWb2Q1p+tUC5b4/xFdYxcDWFiQHA8Sk7Z8mIVj7UNKTcUz34CusEYXX7FNGGQD7evyQSkuqLfQj4zmGr7+crzMyi9RaSTz9V/3BLWAH8DKtLOCTa33biAGdhHZ0gb51zk2UgUuqToTVjzbXOlbBghMJjt8S7nksOeG8+dFxYRyHZ2unT3DzvbaZvt4cg9fP7UK2/VCAhSiHifgcPUQ4XZzPa9mHW+Xh8NyXAXtdyEmOAoNp3pQ99oBsK80kAwvJmt8OCIbQ6CUYB594oRleFBk7lCLl4OyfHlKYUglXqPcw3MzCZ6ZvW0UGReZQQ7m3mw0ZJo3sppCdPl6cERduLRtNJpyg/5wwjWxls118h1R5Ngj/vfD+Za2C2XN3378X6fdRND0frWB3rjdPff6P1QYhgcC4TVgIog1FU+W0J/LyTsp/ksmo2QXhxau3iMONIJZ1+rjOq2Ti7y80zNfD2k8wLR4ZIteeHa6oZIUYkz9LUySdaK8N3aTMz+lm+uCgBgEg/sWpDS48zGJLyHIWubiu7xzjTop9m+Gts+YgAlu1kUGR5aMLcSQOEAVA3I9BRPzfjjN6hN/5cGGMey7nzgQlVc2g+l0E43fGzdBJmWxaEz31KTsBFWJ62qSz6bHkOIVNEaBa4zr5NYRZk3RuV2/dGTsJyRNYHdcdx9CN5R7q6uXtkQj+/btsbOQo7i44/sy0Lcos8/A33FLbbGwHmmny0z12F5VZ/3Rttvjtl+9xXWD5TV8oMeNPbEN5Z2Na5pKb3NrmSewtb90ZN5ru3uc/dheVthgzLkcMLEyouhAm79w2/dcLWowCptzSKVjKLwiDV77v2m9gqVU+dMv4pjswcVYSYk4f8+y7YReGGP6Xp5YfOZ6kfB5gtcrmeCX0kgszW9WXMRcgPsPGPPz8EMQzpVsaFhcIbnMd7BDOEd5rIDG+wF/IABrVzQRbmvT/8EOz64twHgGfC3WMwD2SfmBnfQwwPwTmUcsz5EMNDUACqP5mA6cV3wrR+We9Nyyy7HQxwxR0j33+XsmPCmh5Q3cA1dfnnKCCrP5mC4OJbYZq/bO7TDxmP4B+YyEwMahmsArhin/rXMasnG6YZ13NCD8KqHWKek0uSfH8vLiA7nXECowtyfH8x4gsiW/cU1LPPhufrfz1afhuwj6KR5jbkfCvpRyLGFEEaxK4NMML9e/+nWbdk4KlFpgqNjH9ifG0wP1zbi4/+3x4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS33pOGt7J+OTu8fpdP9R2mFPRsnhQ3HO4/KP89BKSxif/B3UUbL8rWRF4xgVL1z2R92qYfuW73rKYSNZ/ZwlIxGo+5w1EuWw9FoyAofhmHEUm/U63WHvR6Y9Hqh//Xg+jambLHvZKS6rpL2XCVOFaAo7pcUCEGvN9O8ZGJheTLpz+UJfgnvW73hgeL+cBiOx90he3LcXXZH7O+CUtgoWc4W8She2L1eOk66vTgOXmVLcBcKsXr2xyDq/WdOhvcdYn+DIP77PfxeyiMy7HppPxqT0fcyZRrgEI6Xy+/RIpKwFy986E+7UubGH6+pN9wWNrQ930vsmfs1HPl/pdfRzJ+OX3tjwVWmeu9Tt15HTNj337sK61I3dT88/8uZxTNn6vclN56lX/OA1d5duInky+5Y+o5t1/1IZkH6uoiUQIp3hHX/Gq6aDDFRut+evfCWiReMpUUyfxGgEA9cRXdlqy+83lfYSJn5s69EllLbVaKZkiS278vOjCT9xEs8JUjkwPeUhCq2K8X6Mu0ZfV8a7QgbL77HMHWHJIlf7d7M/4ZgGCjucOT1x4o9el0keNGL5fsK69LuUH5H/+Hxy5B0v0bwPXoF8BuG46/R1/ibLL+W39FwuARwFC5HyyUdTiksbft6HhuzP/kYGg3Z6ByvVI9ZOX9uxF4bMoP5BLPYpob/n57HM9MKezb+B2C2hWYL4RGpAAAAAElFTkSuQmCC" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Average time spend
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            2H 24M
          </Typography>
        </CardText>
      </Card>
    </Container>
  );
};

export default Totals;

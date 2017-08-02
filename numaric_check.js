 $(document).on('keypress', '#enter_wallet_amount', function(e){
        var wallet_amount='<?= $wallet_amount ?>';
        var total_val=$("#total").val();
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            swal({
                        title: "String Is Not Allowed Here",
                        text: "Please Enter A Valid Amount  Amount",
                        type: "warning",
                        confirmButtonColor: "#00B08F",
                        confirmButtonText: "Ok!",
                        closeOnConfirm: true
                    },
                    function()
                    {
                        var wallet_amounts='<?= $wallet_amount ?>';

                        $('#enter_wallet_amount').val(0);
                        $('#wallet_amount').text(wallet_amount);
                        $("#pay_notify").text("You Pay only Rs."+total_val);
                        //$("#pay_notify").text("You Pay only Rs."+balance_pay_amount);


                    });
            return false;
        }
    });

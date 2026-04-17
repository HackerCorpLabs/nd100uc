#include <stdint.h>

typedef union {
    uint64_t value; // Full 64-bit microinstruction word
    struct {
        uint16_t csbit_15_0;       // 15:0   Multi-use field (Argument, RA, COND, DATA, Branch Addr)
        uint8_t  csrb_3_0 : 4;     // 19:16  RB (B Operand)
        uint8_t  csbit20 : 1;      // 20     Address Extension Bit
        uint8_t  csloop : 1;       // 22     Loop Control
        uint8_t  csecond : 1;      // 23     Enable Condition
        uint8_t  csscond : 1;      // 24     Set Condition
        uint8_t  csvect : 1;       // 25     Vector Jump Selector
        uint8_t  csdelay_1_0 : 2;  // 27:26  Delay (Optional)
        uint8_t  csts_6_3 : 4;     // 31:28  Sequencing Control
        uint8_t  cscomm_4_0 : 5;   // 36:32  Command Field
        uint8_t  csidbs_4_0 : 5;   // 41:37  IDBS (Internal Data Bus Source)
        uint8_t  csmis_1_0 : 2;    // 43:42  MISO Field
        uint8_t  csalum_1_0 : 2;   // 45:44  ALU Mode Modifier
        uint8_t  cscinsel_1_0 : 2; // 47:46  Carry-In Select
        uint8_t  csrbsel_1_0 : 2;  // 49:48  RBSEL (B-Operand Select)
        uint8_t  csxref3 : 1;      // 50     Extended Field
        uint8_t  csrasel_1_0 : 2;  // 52:51  RASEL (A-Operand Select)
        uint8_t  csstss_1_0 : 2;   // 54:53  ALU Mode Control
        uint16_t csalui_8_0 : 9;   // 63:55  ALU Function
    } bits;
    struct {
        uint16_t branch_addr : 12; // 11:0   Branch Address (lower 12 bits)
        uint8_t  ra : 4;           // 15:12  RA (A Operand)
    } decoded_lower16;             // View for lower 16 bits
    struct {
        uint8_t cond : 4;          // 7:4    COND (Condition Code)
        uint8_t data : 4;          // 3:0    DATA field
    } decoded_cond_data;           // Alternative view for condition + data
} nd120_microinstr_t;


/*

* How to use:

nd120_microinstr_t instr;
instr.value = fetch_microcode();

* Access specific fields:

uint8_t alu_op = instr.bits.csalui_8_0;
uint8_t condition = instr.decoded_cond_data.cond;
uint16_t branch = (instr.decoded_lower16.branch_addr) | (instr.bits.csbit20 << 12);
*/